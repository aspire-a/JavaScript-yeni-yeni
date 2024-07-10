import Link from "next/link";

export default function Home() {
    return (
        <>
            <Link href={"next/login"}><button>Login Sayfası</button></Link> <br/>
            <Link href={"next/signup"}><button>Sign Up Sayfası</button></Link>
        </>
    );
}
