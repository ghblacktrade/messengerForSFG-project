'use client'

import {useForm, FieldValues, SubmitHandler} from 'react-hook-form'
import {useCallback, useState} from "react";
import {BsGoogle, FaYandex, BsGithub} from 'react-icons/all'
// components
import Input from "@/app/components/inputs/Input";
import Button from "@/app/UI/Button";
import AuthSocial from "@/app/UI/AuthSocial";
// end


const AuthForm = () => {

    type Options = 'LOGIN' | 'REGISTER'

    const [option, setIsOption] = useState<Options>('LOGIN')
    const [isLoading, setIsLoading] = useState(false)

    const toggleOptions = useCallback(() => {
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

                    {option === 'REGISTER' && (
                        <Input id='email'
                               label='Email'
                               register={register}
                               errors={errors}
                        />
                    )}

                    <Input id='email'
                           label='Email adress'
                           type='email'
                           register={register}
                           errors={errors}
                    />

                    <Input id='password'
                           label='Password'
                           type='password'
                           register={register}
                           errors={errors}
                    />

                    <div>
                        <Button type='submit'
                                disabled={isLoading}
                                fullWidth
                        >
                            {option === 'LOGIN' ? 'Sign in' : 'Register'}
                        </Button>
                    </div>

                </form>

                <div className='mt-6'>
                    <div className='relative'>
                        <div className='
                            absolute
                            inset-0
                            flex
                            items-center
                        '>
                            <div className='
                              w-full
                              border-t
                              border-gray-300
                              '/>
                            {/*  close div  */}
                        </div>
                        <div className='relative flex justify-center text-sm'>
                            <span className='bg-white px-2 text-gray-500'>
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className='mt-6 flex gap-2'>
                        <AuthSocial
                            icon={BsGoogle}
                            onClick={() => socialAction('google')}
                        />
                        <AuthSocial
                            icon={FaYandex}
                            onClick={() => socialAction('yandex')}
                        />
                        <AuthSocial
                            icon={BsGithub}
                            onClick={() => socialAction('github')}
                        />
                    </div>

                </div>

                <div className='
                    flex
                    gap-2
                    justify-center
                    text-sm
                    mt-6
                    px-2
                    text-gray-500
                    '>

                    <div>
                        {option === 'LOGIN' ? 'New to Messenger?' : 'Already have an account'}
                    </div>

                    <div
                        onClick={toggleOptions}
                        className='underline cursor-pointer'
                    >
                        {option === 'LOGIN' ? 'Create an account' : 'Login' }
                    </div>

                </div>

            </div>

        </div>
    );
};

export default AuthForm;