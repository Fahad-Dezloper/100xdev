/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export async function signInWithGoogle() {
    // Import the signIn function from your auth module
    const { signIn } = await import('@/auth');
    await signIn("google");
}

export async function signInWithGithub() {
    const { signIn } = await import('@/auth');
    await signIn("github");
}

export async function signInWithCredentials(formData: FormData | ({ redirectTo?: string; redirect?: true | undefined; } & Record<string, any>) | undefined) {
    const { signIn } = await import('@/auth');
    await signIn("credentials", formData);
}
