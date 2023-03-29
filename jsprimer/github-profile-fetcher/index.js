"use strict";

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
        <h4 class="user-name">ユーザー名: ${userProfile.userName}</h4>
        <img class="avatar-icon" src="${userProfile.avatarIcon}" alt="${userProfile.userName}" height=100>
        <dl>
            <dt>User Home</dt>
            <dd class="user-home-url"><a href=${userProfile.userHomeUrl}>${userProfile.userHomeUrl}</a></dd>
        </dl>
    `
}

const toUserProfile = (profile) => {
    return {
        userName: profile.login,
        avatarIcon: profile.avatar_url,
        userHomeUrl: profile.html_url
    }
}

const button = window.document.getElementsByTagName('button').item(0)
button.addEventListener('click', () => {
    onButtonClick();
})