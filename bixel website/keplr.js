async function connect() {
    const keplr = await getKeplr();
    if (!keplr) {
        alert("Please install keplr extension");
        return;
    }

    const chainId = "juno-1";

    // Enabling before using the Keplr is recommended.
    // This method will ask the user whether to allow access if they haven't visited this website.
    // Also, it will request that the user unlock the wallet if the wallet is locked.
    await keplr.enable(chainId);

    const offlineSigner = keplr.getOfflineSigner(chainId);

    // You can get the address/public keys by getAccounts method.
    // It can return the array of address/public key.
    // But, currently, Keplr extension manages only one address/public key pair.
    // XXX: This line is needed to set the sender address for SigningCosmosClient.
    const accounts = await offlineSigner.getAccounts();

    const addressEl = document.getElementById("address");
    addressEl.innerText = accounts[0].address;
    addressEl.style.fontSize = "8px";
    

}


async function getKeplr() {
    if (window.keplr) {
        return window.keplr;
    }

    if (document.readyState === "complete") {
        return window.keplr;
    }

    return new Promise((resolve) => {
        const documentStateChange = (event) => {
            if (
                event.target &&
                event.target.readyState === "complete"
            ) {
                resolve(window.keplr);
                document.removeEventListener("readystatechange", documentStateChange);
            }
        };

        document.addEventListener("readystatechange", documentStateChange);
    });
}

document.getElementById("connect-btn").addEventListener("click", connect);