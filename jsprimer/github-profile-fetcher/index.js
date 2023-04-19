"use strict";

const getProfile = async (userId) => {
    const resposne = await fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`);
    return resposne.ok ? resposne.json() : console.error(`failed to get profile: ${userId}`);
}

const getUserProfile = async (userId) => {
    const profile = await getProfile(userId);
    return toUserProfile(profile);
}

const toUserProfile = (profile) => {
    return {
        userName: profile.login,
        avatarIcon: profile.avatar_url,
        userHomeUrl: profile.html_url
    }
}

const onDOMContentLoaded = () => {
    hideErrorMessage();
    hideProfile();
}

const onInputFocus = () => {
    hideErrorMessage();
}
const onInputKeyup = async (event) => {
    if (event.isComposing || event.key !== 'Enter') return;
    hideProfile();
    hideErrorMessage();
    const userId = window.document.querySelector('.id-input-container input').value
    if (userId === "") {
        displayErrorMessage('プロフィールを取得したい GitHub ID を入力してください');
        return;
    }
    const userProfile = await getUserProfile(userId);
    makeProfileDOM(userProfile);
    displayProfile();
}

const onButtonClick = async () => {
    hideProfile();
    const userId = window.document.querySelector('.id-input-container input').value
    if (userId === "") {
        displayErrorMessage('プロフィールを取得したい GitHub ID を入力してください');
        return;
    }
    const userProfile = await getUserProfile(userId);
    makeProfileDOM(userProfile);
    displayProfile();
}

const makeProfileDOM = (profile) => {
    window.document.querySelector('.profile-container').innerHTML = `
        <div class="title">GitHub User Profile</div>
        <dl>
            <dt class="user-name-label">ユーザー名: </dt>
            <dd class="user">
                <div class="user-name">${profile.userName}</div>
                <img class="avatar-icon" src="${profile.avatarIcon}" alt="${profile.userName}">
            </dd>
            <dt class="user-home-label">User Home: </dt>
            <dd class="user-home-url"><a href=${profile.userHomeUrl}>${profile.userHomeUrl}</a></dd>
        </dl>
    `
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

window.addEventListener('DOMContentLoaded', () => {
    onDOMContentLoaded();
})
window.document.querySelector('.id-input-container input').addEventListener('focus', () => {
    onInputFocus();
})
window.document.querySelector('.id-input-container input').addEventListener('keyup', e => {
    onInputKeyup(e);
})
window.document.querySelector(".id-input-container button").addEventListener('click', () => {
    onButtonClick();
})
