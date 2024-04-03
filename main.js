const username = document.getElementById("signup-name")
const useremail = document.getElementById("signup-email")
const userage = document.getElementById("signup-age")
const userpassword = document.getElementById("signup-password")
const userrepassword = document.getElementById("signup-repassword")

const signBtn = document.getElementById("sign-btn")

const nameArea = document.getElementById("name-area")
const emailArea = document.getElementById("email-area")
const ageArea = document.getElementById("age-area")
const passwordArea = document.getElementById("password-area")
const repasswordArea = document.getElementById("repassword-area")



//정규 표현식
const nameForm = /^[가-힣a-zA-Z]+$/; // 한글 + 영문만
const emailForm = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/ //이메일 형식만 가능
const ageForm = /^[0-9]+$/ // 숫자만 가능 
const passwordForm = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{4,12}$/ //최소 4자리 이상 최대 12자리 영어, 숫자, 특수문자 모두조합


//input에서 key입력을 받았을 때 inputNull함수 실행
username.addEventListener("keyup",()=>inputNull());
useremail.addEventListener("keyup", ()=>inputNull());
userage.addEventListener("keyup", ()=>inputNull());
userpassword.addEventListener("keyup", ()=>inputNull());
userrepassword.addEventListener("keyup", ()=>inputNull());



// 이름확인 함수
const userNameCheck = ()=>{
    //반환 값
    let isValid = false;

    if(nameForm.test(username.value)){
        nameArea.innerText="멋진 이름이네요!"
        nameArea.style.color="green"
        isValid = true;
    }
    else{
        nameArea.innerText="필수 입력 항목입니다."
        nameArea.style.color="red"
    }
    return isValid
}
// 이메일 확인
const emailCheck = ()=>{
    let isValid = false;

    if(emailForm.test(useremail.value)){
        emailArea.innerText="올바른 이메일 형식입니다!"
        emailArea.style.color="green";
        isValid = true;
    }
    else{
        emailArea.innerText="올바른 이메일 형식이 아닙니다."
        emailArea.style.color="red"
    }

    return isValid
}

//나이 확인
const ageCheck = ()=>{
    let isValid = false;

    //숫자인지 확인
    if(ageForm.test(userage.value)){
        
        //나이가 19이하인 경우
        if(parseInt(userage.value)<19){
            ageArea.innerText="미성년자는 가입할 수 없습니다!"
            ageArea.style.color="red"
            return isValid
        }
        ageArea.innerText="올바른 나이 형식입니다"
        ageArea.style.color="green";
        isValid = true;
        return isValid
    }
    //음수일 경우
    else if(parseInt(userage.value)<=0){
        ageArea.innerText="나이는 음수가 될 수 없습니다!"
    }
    //실수일 경우
    else if(parseInt(userage.value)%1===0){
        ageArea.innerText="나이는 실수가 될 수 없습니다!"
    }
    // 문자열일경우
    else if(typeof userage.value==="string"){
        // console.log("확인",parseInt(userage.value)+1)
        ageArea.innerText="나이는 숫자 형식이어야합니다"
    }
    ageArea.style.color="red"
    return isValid
}

// 비밀번호 확인
const passwordCheck = ()=>{

    //반환 값
    let isValid = false;

    //비밀번호 형식인지 확인
    if(passwordForm.test(userpassword.value)){
        passwordArea.innerText="올바른 비밀번호입니다!"
        passwordArea.style.color="green";
        isValid = true;
        return isValid
    }
    else if(userpassword.value.length<4){
        passwordArea.innerText="비밀번호는 최소 4자리 이상이어야 합니다."
    }
    else if(userpassword.value.length>12){
        passwordArea.innerText="비밀번호는 최대 12자리까지 가능합니다."
    }
    else{
        passwordArea.innerText="영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다."
    }
    passwordArea.style.color="red"
    return isValid

}

// 비밀번호 중복확인
const repasswordCheck = ()=>{

    //반환 값
    let isValid = false;
    //비밀번호가 같을경우
    if(userpassword.value===userrepassword.value && userrepassword.value!==""){
        repasswordArea.innerText="비밀번호가 일치합니다"
        repasswordArea.style.color="green";
        isValid = true;
    }
    else{
        repasswordArea.innerText="비밀번호가 일치하지 않습니다."
        repasswordArea.style.color="red"
    }
    return isValid
}
    


const sign = ()=>{
    const nameIsvalid = userNameCheck()
    const emailIsvalid = emailCheck()
    const ageIsvalid =ageCheck()
    const passwordIsvalid =passwordCheck()
    const repasswordIsvalid =repasswordCheck()
    if(nameIsvalid && emailIsvalid && ageIsvalid && passwordIsvalid && repasswordIsvalid){
        modal.style.display = "flex";
    }
}


//아무것도 입력하지 않으면 버튼 활성화 X
const inputNull = ()=>{
    if(username.value==="" || useremail.value==="" || userage.value==="" || userpassword.value==="" || userrepassword.value===""){
        signBtn.disabled = true;
        signBtn.style.backgroundColor="lightgray"
    }
    else{
        signBtn.disabled = false;
        signBtn.style.backgroundColor="black"
    }
}