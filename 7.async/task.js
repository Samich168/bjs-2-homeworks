class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId;
    }
    addClock(time, func){
        if(!time || !func){
            throw new Error("Отсутствуют обязательные параметры");
        }
        if(this.alarmCollection.find(alarm => alarm.time === time)){
            console.warn("Уже присутсвует звонок на это время");
            return;
        }
        this.alarmCollection.push({callback: func, time: time, canCall: true});
    }
    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }
    getCurrentFormattedTime(){
        let currentdate = new Date();
        let minutes = currentdate.getMinutes().toString().padStart(2, '0');
        let hours = currentdate.getHours().toString().padStart(2, '0');
        return `${hours}:${minutes}`
    }
    start(){
        if(!this.intervalId){
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach(alarm => {
                if(alarm.time === this.getCurrentFormattedTime() && alarm.canCall){
                    alarm.canCall = false;
                    alarm.callback();
                    }
                });
            }, 1000)
        }
    }
    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls(){
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}