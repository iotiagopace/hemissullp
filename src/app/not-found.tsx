import { Metadata } from 'next';
import ErrorPage from '@/features/error404/ErrorPage';

export const metadata: Metadata = {
    title: "404 Error || Automart || Automart Next Js Template",
};

export default function Page() {
    return (
        <>
            <ErrorPage />
        </>
    );
}
