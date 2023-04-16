"use strict";

export async function getProfile(userId) {
    const resposne = await fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`);
    return resposne.ok ? resposne.json() : console.error(`failed to get profile: ${userId}`);
}

export async function getUserProfile(userId) {
    const profile = await getProfile(userId);
    return toUserProfile(profile);
}

export function onDOMContentLoaded() {
    hideErrorMessage();
    hideProfile();
}

export function onInputFocus() {
    hideErrorMessage();
}

export async function onButtonClick(_) {
    hideProfile();
    const userId = window.document.querySelector('.id-input-container input').value
    if (userId === "") {
        displayErrorMessage('プロフィールを取得したい GitHub ID を入力してください');
        return;
    }
    const userProfile = await getUserProfile(userId);
    window.document.querySelector('.profile-container').innerHTML = `
        <div class="title">GitHub User Profile</div>
        <h4 class="user-name">ユーザー名: ${userProfile.userName}</h4>
        <img class="avatar-icon" src="${userProfile.avatarIcon}" alt="${userProfile.userName}" height=100>
        <dl>
            <dt>User Home</dt>
            <dd class="user-home-url"><a href=${userProfile.userHomeUrl}>${userProfile.userHomeUrl}</a></dd>
        </dl>
    `
    displayProfile();
}

const hideErrorMessage = () => {
    window.document.querySelector('.error-message').classList.add('hidden');
}

const displayErrorMessage = (message) => {
    let errorMessageElement = window.document.querySelector('.error-message');
    errorMessageElement.innerHTML = message;
    errorMessageElement.classList.remove('hidden');
}

const displayProfile = () => {
    window.document.querySelector('.profile-container').classList.remove('hidden');
}
const hideProfile = () => {
    window.document.querySelector('.profile-container').classList.add('hidden');
}

const toUserProfile = (profile) => {
    return {
        userName: profile.login,
        avatarIcon: profile.avatar_url,
        userHomeUrl: profile.html_url
    }
}

window.addEventListener('DOMContentLoaded', () => {
    onDOMContentLoaded();
})
window.document.querySelector('.id-input-container input').addEventListener('focus', e => {
    onInputFocus();
})
window.document.querySelector(".id-input-container button").addEventListener('click', () => {
    onButtonClick();
})
