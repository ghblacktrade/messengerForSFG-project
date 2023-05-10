import Image from "next/image";
import AuthForm from "@/app/components/AuthForm";

export default function Home() {
    return (

        <div className='
        flex
        min-h-full
        flex-col
        justify-center
        py-12
        sm:px-6
        lg:px-8
        bg-green-50
'>
            <div className='
            sm:mx-auto
            sm:w-full
            sm:max-w-md
         '>
                <Image src='/img/logo.png' alt='logo'
                       width='50'
                       height='50'
                       className='mx-auto w-auto'
                />
                <h2
                    className='
                    mt-6
                    text-center
                    text-3xl
                    font-bold
                    text-gray-800
                '>
                    Sign in
                </h2>
            </div>
<AuthForm />
        </div>

    )
}
