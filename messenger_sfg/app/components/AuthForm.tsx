'use client'
import {useForm, FieldValues, SubmitHandler} from 'react-hook-form'
import {useCallback, useState} from "react";
import Input from "@/app/components/inputs/Input";


const AuthForm = () => {

    type Options = 'LOGIN' | 'REGISTER'

    const [option, setIsOption] = useState<Options>('LOGIN')
    const [isLoading, setIsLoading] = useState(false)

    const toggle = useCallback(() => {
        if (option === 'LOGIN') {
            setIsOption('REGISTER')
        } else {
            setIsOption('LOGIN')
        }
    }, [option])

    const {

        register,
        handleSubmit,
        formState: {
            errors
        }

    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {

        setIsLoading(true)

        if (option === "REGISTER") {

        }

        if (option === 'LOGIN') {

        }
    }

    const socialAction = (action: string) => {

        setIsLoading(true)
    }

    return (
        <div className='
                mt-8
                sm:mx-auto
                sm:w-full
                sm:max-w-md
            '
        >
            <div className='
                bg-white
                px-4
                py-8
                shadow
                sm:rounded-lg
                sm:px-10
            '>
                <form className='space-y-6'
                      onSubmit={handleSubmit(onSubmit)}
                >
                    <Input id='email'
                           label='Email'
                           register={register}
                           errors={errors}
                    />

                </form>

            </div>

        </div>
    );
};

export default AuthForm;