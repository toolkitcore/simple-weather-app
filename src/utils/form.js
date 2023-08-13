export const isFormValid = (value) => {
    const specialOrNumericCheck = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]/;

    if(! value || specialOrNumericCheck.test(value)) {
        return false;
    }

    return true;
}