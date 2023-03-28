import { Outlet } from 'react-router-dom'

const LoginLayout = () => {
	return (
		<>
			<main
				className='container mx-auto flex flex-col gap-20 p-5 mt-10 items-center'>
				<Outlet />
			</main>
		</>
	)
}

export default LoginLayout;