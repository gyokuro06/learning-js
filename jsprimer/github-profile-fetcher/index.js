"use strict";

console.log("page loaded")

export async function getProfile(userId) {
    const resposne = await fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`);
    return resposne.ok ? resposne.json() : console.error(`failed to get profile: ${userId}`);
}

export async function getUserProfile(userId) {
    const profile = await getProfile(userId);
    return toUserProfile(profile);
}

export async function onButtonClick(_) {
    const userId = "gyokuro06";
    const userProfile = await getUserProfile(userId);
    window.document.getElementsByClassName('profile-container').item(0).innerHTML = `
        <p class="user-name">ユーザー名: ${userProfile.userName}</p>
    `
}

const toUserProfile = (profile) => {
    console.log(profile.login)
    return {
        userName: profile.login
    }
}

const button = window.document.getElementsByTagName('button').item(0)
button.addEventListener('click', () => {
    console.log("in click event listener callback")
    onButtonClick();
})