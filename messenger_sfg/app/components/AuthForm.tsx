'use client'

import {useState} from "react";

const AuthForm = () => {

    type Variant = 'LOGIN' | 'REGISTER'

    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [isLoading, setIsLoading]

    return (
        <div>
            Auth
        </div>
    );
};

export default AuthForm;