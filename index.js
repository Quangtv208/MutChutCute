var a = prompt("Mời bạn chọn số để xem bói: \n1. bói tình duyên \n2.bói sự NGHIỆP  \n3.coming son ");
function hienthi() {
    do {
        if(a > 3){
            a = prompt(a+" Chưa có số này chọn lại!!! ")
        }else{
            break;
        }
    } while (true);
    switch (a) {
        case "1":
            document.getElementById("step1").innerHTML="✿Hãy yêu iem Quang✿ "
        
            break;
        case "2":
            document.getElementById("step2").innerHTML="hmmm!! Muốn giàu hãy iu Vinh Quang ✌"
                
            break;
    
        default:
            alert(a+"Adu bảo ko có số này ròi")
            break;
    }
    
}