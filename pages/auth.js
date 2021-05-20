import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Auth() {
	const [ session, loading ] = useSession();

	return (
		<div>
			{!session && (
				<div>
					<h1>Not Signed In</h1>
					<button onClick={signIn}>Sign in</button>
				</div>
			)}
			{session && (
				<div>
					<h1>Signed in as {session.user.email}</h1>
					<div>You Now Have Access</div>
					<button onClick={signOut}>Sign out</button>
				</div>
			)}
		</div>
	);
}
