import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfilePictureQuery } from "../services/shopService";
import { setProfilePicture } from "../features/auth/authSlice";

const MainNavigator = () => {
    const user = useSelector(state=>state.authReducer.user)
    const localId = useSelector(state=>state.authReducer.localId)
    //const user = "Logged"
    const {data,error, isLoading } = useGetProfilePictureQuery(localId)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(data){
            //console.log(data)
            dispatch(setProfilePicture(data.image))
        }
    },[data])

    return (
        <NavigationContainer>
            {user && !isLoading ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}

export default MainNavigator