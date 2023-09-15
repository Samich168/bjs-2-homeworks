class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        if(!time || !callback){
            throw new Error("Отсутствуют обязательные аргументы")
        }
        if(this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn("Уже присутствует звонок на это время");
        }
        this.alarmCollection.push({callback: callback, time: time, canCall: true});
    }
    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(t => t.time != time);
    }
    getCurrentFormattedTime(){
        const now = new Date()
        const currentHour = String(now.getHours().padStart(2, "0"));
        const currentMinute = String(now.getMinutes().padStart(2, "0"));

        return (`${currentHour}:${currentMinute}`)
    }
    start(){
        if(!this.intervalId){
            this.intervalId = setInterval(() => {
                const currentTime = this.getCurrentFormattedTime();

                this.alarmCollection.forEach((alarm) =>{
                    if(alarm.time === currentTime && alarm.canCall){
                        canCall = false;
                        alarm.callback();
                    }
                })
            }, 1000)
        }   
    }
    stop(){
        if(this.intervalId){
            clearInterval()
            this.intervalId = null;
        }
        
    }
    resetAllCalls(){
        this.alarmCollection.forEach((call) => {
            call.canCall = true;
        })
    }
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}