import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Auth() {
	return (
		<div>
			<h1>Auth</h1>
		</div>
	);
}
