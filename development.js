class DigitalClock {
     constructor(element){
          this.element = element;
     }
     start(){
          this.update();
          setInterval(() => {
               this.update();
          },500);
     }
     update(){
          const parts = this.getTimeParts();
          const minuteFormatted = parts.minute.toString().padStart(2,'0');
          const timeFormatted = `${parts.hour} : ${minuteFormatted}`;
          const amPm = parts.isAM ? "AM" : "PM";
          this.element.querySelector('.clock-time').textContent = timeFormatted;
          this.element.querySelector('.clock-amPm').textContent = amPm;
     }
     getTimeParts(){
          const date = new Date();
          return {
               hour: date.getHours() % 12 || 12,
               minute: date.getMinutes(),
               isAm: date.getHours() < 12,
          };
     }
}
const clockElement = document.querySelector('.clock');
const clockObject = new DigitalClock(clockElement);
clockObject.start();