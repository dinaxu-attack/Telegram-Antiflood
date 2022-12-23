const Antiflood = async (message) => {
    var date_time = new Date()
    
    let date = ("0" + date_time.getDate()).slice(-2);
    let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
    let year = date_time.getFullYear();
    let hours = date_time.getHours();
    let minutes = date_time.getMinutes();

    var currenttime = year + "-" + month + "-" + date + " " + hours + ":" + minutes;

    let msgdate = new Date(message.update.message.date*1000);

    let mdate = ("0" + msgdate.getDate()).slice(-2);
    let mmonth = ("0" + (msgdate.getMonth() + 1)).slice(-2);
    let myear = msgdate.getFullYear();
    let mhours = msgdate.getHours();
    let mminutes = msgdate.getMinutes(); 
    
    var msgdatee = myear + "-" + mmonth + "-" + mdate + " " + mhours + ":" + mminutes;
    
    if (msgdatee != currenttime) {
        return true
    } else {
        return false
    }
    
}


exports.Antiflood = Antiflood