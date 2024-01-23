const AuthLayout = ({children} : {children: React.ReactNode}) => {
    return(
        <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-900 to-black">
           {children}
        </div>
    )
}

export default AuthLayout;