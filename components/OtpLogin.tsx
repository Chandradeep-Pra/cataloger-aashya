"use client"

import { auth } from '@/lib/firebase';
import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from './ui/input-otp'
import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

const OtpLogin = () => {

    const router = useRouter();

    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState<string| null>(null);
    const [resendCountDown, setResendCountDown] = useState(0);

    const [reCaptchVerifier, setReCaptchVerifier] = useState<RecaptchaVerifier | null>(null);
    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

    const [isPending, setTransition] = useTransition();

    // useEffect(() => {
    //     let timer: NodeJS.Timeout;
    //     if(resendCountDown>0){
    //         timer = setTimeout(() => setResendCountDown(resendCountDown-1),1000)
    //     }

    //     return () => clearTimeout(timer);
    // },[resendCountDown])

    // useEffect(() => {
    //     const recaptchaVerifier = new RecaptchaVerifier(
    //         auth,
    //         "recaptcha-container",
    //         {
    //             size:"invisible",
    //         }
    //     );
    //     setReCaptchVerifier(recaptchaVerifier);

    //     return () => recaptchaVerifier.clear();
    // },[])
  return (
    <div className='bg-gradient-to-l from-amber-200 via-pink-300 to-40% h-screen items-center justify-center flex font-bold text-2xl'>
        {/* <div className='recaptcha-container' /> */}
    <div className=' px-16 rounded-3xl backdrop-blur-2xl text-center py-8 shadow-2xl shadow-neutral-100'>
        <h1 className='pb-6'>Login to </h1>
 <InputOTP maxLength={6} >
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} className='rounded-r-none' />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} className='rounded-l-none'/>
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
    </div>
   
</div>
  )
}

export default OtpLogin