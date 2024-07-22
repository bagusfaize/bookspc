import { usePathname } from "next/navigation";


const useLogin = () => {
    const pathname = usePathname();
    const isLogin = pathname.includes('dashboard');

    return {
        isLogin
    }

}

export default useLogin;