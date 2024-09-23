// Blog button
const blogButton = document.getElementById('blog-button');
blogButton.addEventListener('click', function () {
    window.location.href = 'blog.html';
});

// Donation button
document.getElementById('donation-button').addEventListener('click', function () {
    getElementValueById('donation-button').classList.add('bg-[#B4F461]');
    getElementValueById('history-button').classList.remove('bg-[#B4F461]');
    const donationSection = document.getElementById('donation-section');
    const historySection = document.getElementById('history-section');
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');
});

// History button
document.getElementById('history-button').addEventListener('click', function () {
    getElementValueById('history-button').classList.add('bg-[#B4F461]');
    getElementValueById('donation-button').classList.remove('bg-[#B4F461]');
    const historySection = document.getElementById('history-section');
    const donationSection = document.getElementById('donation-section');
    historySection.classList.remove('hidden');
    donationSection.classList.add('hidden');
});


// donate now button Noakhali
document.getElementById('donate-button-Noakhali').addEventListener('click', function () {
    let myBalance = getInnerTextValueById('my-balance');
    let currentDonation = getInnerTextValueById('current-donation-1');
    const donation = getInputFieldValueById('donation-input-noakhali');

    const myBalanceElement = getElementValueById('my-balance');
    const currentDonationElement = getElementValueById('current-donation-1');

    const donationElement = getElementValueById('donation-input-noakhali');
    const donationStr = getElementValueById('donation-input-noakhali').value;

    const quotaModal = getElementValueById('Noakhali');
    const closeModal = getElementValueById('close-noakhali-modal');

    // validition
    if (donation > myBalance || donation <= 0 || isNaN(donation) || donationStr.trim() === '') {
        alert('Invalid Input.....Please Type a Valid Input');
        donationElement.value = '';
        return;
    }

    else {
        // set donation
        myBalance = myBalance - donation;
        currentDonation = currentDonation + donation;
        myBalanceElement.innerText = myBalance;
        currentDonationElement.innerText = currentDonation;
        donationElement.value = '';

        // open close modal
        quotaModal.classList.add('modal-open');
        closeModal.addEventListener('click', function () {
            quotaModal.classList.remove('modal-open');
        });

        // set history
        const headingText = getElementValueById('heading-text-1').innerText;
        const historySection = getElementValueById('history-section');
        const date = new Date();
        const div = document.createElement('div');
        div.className = "border-2 space-y-3 px-4 mb-6 py-4";
        div.innerHTML = `
            <h2 class="text-xl font-semibold">${donation} Taka is Donated for ${headingText}</h2>
            <p class="bg-slate-50">Date : ${date}</p>
        `
        historySection.insertBefore(div, historySection.firstChild);
    }
});


// donate now button feni
document.getElementById('donate-button-feni').addEventListener('click', function () {
    let myBalance = getInnerTextValueById('my-balance');
    let currentDonation = getInnerTextValueById('current-donation-2');
    const donation = getInputFieldValueById('donation-input-feni');

    const myBalanceElement = getElementValueById('my-balance');
    const currentDonationElement = getElementValueById('current-donation-2');

    const donationElement = getElementValueById('donation-input-feni');
    const donationStr = getElementValueById('donation-input-feni').value;

    const quotaModal = getElementValueById('feni');
    const closeModal = getElementValueById('close-feni-modal');

    // validition
    if (donation > myBalance || donation <= 0 || isNaN(donation) || donationStr.trim() === '') {
        alert('Invalid Input.....Please Type a Valid Input');
        donationElement.value = '';
        return;
    }

    else {
        // set donation
        myBalance = (myBalance - donation).toFixed(2);
        currentDonation = (currentDonation + donation).toFixed(2);
        myBalanceElement.innerText = myBalance;
        currentDonationElement.innerText = currentDonation;
        donationElement.value = '';

        // open close modal
        quotaModal.classList.add('modal-open');
        closeModal.addEventListener('click', function () {
            quotaModal.classList.remove('modal-open');
        });

        // // set history
        const headingText = getElementValueById('heading-text-2').innerText;
        const historySection = getElementValueById('history-section');
        const date = new Date();
        const div = document.createElement('div');
        div.className = "border-2 space-y-3 px-4 mb-6 py-4";
        div.innerHTML = `
            <h2 class="text-xl font-semibold">${donation} Taka is Donated for ${headingText}</h2>
            <p class="bg-slate-50">Date : ${date}</p>
        `
        historySection.insertBefore(div, historySection.firstChild);
    }
});


// donate now button quota
document.getElementById('donate-button-quota').addEventListener('click', function () {
    let myBalance = getInnerTextValueById('my-balance');
    let currentDonation = getInnerTextValueById('current-donation-3');
    const donation = getInputFieldValueById('donation-input-quota');

    const myBalanceElement = getElementValueById('my-balance');
    const currentDonationElement = getElementValueById('current-donation-3');

    const donationElement = getElementValueById('donation-input-quota');
    const donationStr = getElementValueById('donation-input-quota').value;
    const quotaModal = getElementValueById('quota');
    const closeModal = getElementValueById('close-quota-modal');

    // validition
    if (donation > myBalance || donation <= 0 || isNaN(donation) || donationStr.trim() === '') {
        alert('Invalid Input.....Please Type a Valid Input');
        donationElement.value = '';
        return;
    }

    else {
        // set donation
        myBalance = (myBalance - donation).toFixed(2);
        currentDonation = (currentDonation + donation).toFixed(2);
        myBalanceElement.innerText = myBalance;
        currentDonationElement.innerText = currentDonation;
        donationElement.value = '';

        // open close modal
        quotaModal.classList.add('modal-open');
        closeModal.addEventListener('click', function () {
            quotaModal.classList.remove('modal-open');
        });

        // set history
        const headingText = getElementValueById('heading-text-3').innerText;
        const historySection = getElementValueById('history-section');
        const date = new Date();
        const div = document.createElement('div');
        div.className = "border-2 space-y-3 px-4 mb-6 py-4";
        div.innerHTML = `
            <h2 class="text-xl font-semibold">${donation} Taka is Donated for ${headingText}</h2>
            <p class="bg-slate-50">Date : ${date}</p>
        `
        historySection.insertBefore(div, historySection.firstChild);
    }
});