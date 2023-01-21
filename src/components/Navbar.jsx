import React, { useEffect } from 'react';
import './Navbar.css';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
    selectUserName,
    selectUserPhoto,
    setSignOutState,
    setUserLoginDetails
} from '../features/user/userSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                navigate('/home');
            }
        })
    }, [userName])

    const googleProvider = new GoogleAuthProvider();

    const handleAuth = () => {
        if (!userName) {
            signInWithPopup(auth, googleProvider).then((result) => {
                const user = result.user;
                setUser(user);
            }).catch((error) => {
                alert(error.message)
                console.log(error)
            })} else if(userName) {
                auth.signOut().then(()=>{
                    dispatch(setSignOutState());
                    navigate('/');
                }).catch((error)=> alert(error.message))
            }
        }
    

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        )
    }



    return (
        <nav className=' h-[80px] px-[36px] fixed top-0 left-0 right-0 w-full flex justify-between items-center z-10 bg-gray-900 tracking-[16px]'>
            <div className='p-0 w-[80px] max-h-[70px] mt-[4px] display:inline-block text-0'>
                <img className='w-full cursor-pointer' src="/images/logo.svg" alt="" />
            </div>
            {
                !userName ? (
                    <button onClick={handleAuth} className='bg-black/40 px-[16px] py-[8px] border rounded-md font-bold uppercase tracking-[1.7px] hover:bg-white hover:text-black transition duration-250 ease-out hover:ease-in' >LogIn</button>
                ) : (
                    <>
                        <div className=' hidden md:flex flex-row justify-end items-center whitespace-nowrap m-0 p-0 h-full ml-[25px] mr-auto relative '>
                            <a className='flex px-[12px] item-center' href="/home"><img className='w-[20px] min-w-[20px] h-[20px] z-auto' src="/images/home-icon.svg" alt="" /><span className='tracking-[1.7px] relative py-[2px] whitespace-nowrap home_icon'>Home</span></a>
                            <a className='flex px-[12px] item-center' href="/home"><img className='w-[20px] min-w-[20px] h-[20px] z-auto' src="/images/search-icon.svg" alt="" /><span className='tracking-[1.7px] relative py-[2px] whitespace-nowrap home_icon'>Search</span></a>
                            <a className='flex px-[12px] item-center' href="/home"><img className='w-[20px] min-w-[20px] h-[20px] z-auto' src="/images/watchlist-icon.svg" alt="" /><span className='tracking-[1.7px] relative py-[2px] whitespace-nowrap home_icon'>Watchlist</span></a>
                            <a className='flex px-[12px] item-center' href="/home"><img className='w-[20px] min-w-[20px] h-[20px] z-auto' src="/images/movie-icon.svg" alt="" /><span className='tracking-[1.7px] relative py-[2px] whitespace-nowrap home_icon'>Movies</span></a>
                            <a className='flex px-[12px] item-center' href="/home"><img className='w-[20px] min-w-[20px] h-[20px] z-auto' src="/images/series-icon.svg" alt="" /><span className='tracking-[1.7px] relative py-[2px] whitespace-nowrap home_icon'>Tv Series</span></a>
                        </div>
                        <div className=' sign_out w-[50px] h-[50px] relative flex justify-center items-center user_photo'>
                            <img src={userPhoto} className='w-[50px] h-[50px] flex rounded-full relative cursor-pointer items-center justify-center flex-end ' alt='' />
                            <button onClick={handleAuth} className=' drop_down absolute top-[50px] right-0 bg-slate-900  border border-white/30 w-[100px] p-1 text-[14px] tracking-[3px] '>Sign Out</button>
                        </div>
                    </>
                )
            }

        </nav>
    );
};

export default Navbar;