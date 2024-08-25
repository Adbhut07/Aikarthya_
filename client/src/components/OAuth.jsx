import React from 'react'
import axios from 'axios'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

function OAuth() {
    const auth = getAuth(app);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async() =>{
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        try {
            const resultFromGoogle = await signInWithPopup(auth, provider);
            const displayName = resultFromGoogle.user.displayName || '';
            const [firstName, ...lastNameArr] = displayName.split(' ');
            const lastName = lastNameArr.join(' ');
            const res = await axios.post('/api/auth/google',
             {
                firstName,
                lastName,name: resultFromGoogle.user.displayName,
                email: resultFromGoogle.user.email,
                googlePhotoUrl: resultFromGoogle.user.photoURL,
            }, {
                headers: { "Content-Type": "application/json" },
            });

            if(res.status == 200){
                dispatch(signInSuccess(res.data));
                navigate('/')
            }
        } catch (error) {
            console.log(error);
        }

    }
  return (
    // <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
    //     <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
    // </Button>
    <button
            onClick={handleGoogleClick}
            type="button"
            className="group relative flex w-full justify-center rounded-lg border border-gray-300 bg-white py-3 px-6 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FcGoogle className="h-6 w-6" aria-hidden="true" />
            </span>
            Sign in with Google
          </button>
  )
}

export default OAuth