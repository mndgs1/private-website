interface ContactFormValues {
    name: string;
    email: string;
    message: string;
    subject: string;
}

export async function submitContactForm(values: ContactFormValues) {
    const valuesWithKey = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
        ...values,
    };
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(valuesWithKey, null, 2),
        });

        const data = await response.json();

        return data;
    } catch (e) {
        console.error(e);
    }
}
