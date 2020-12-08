export default () => {
    let gauge = document.querySelectorAll('.gauge');

    let chartInner = document.querySelectorAll('.gauge__value');

    for (let i = 0; i < gauge.length; i++) {
        var data = [
            {id: 1, percentage: gauge[i].getAttribute('data-value'), title:''},

        ]

        const creatSvg = (percentage, title, svgColor) => {
            let svg =`
     <svg viewBox="0 0 100 50">

       <foreignObject y=40%>

           <div class="container">
             <p>${title}</p>
           </div>
       </foreignObject>
     <g
        fill-opacity="0"
        stroke-width="2"
      >
       <path
        class="unfilled"
        d="M5 50a45 45 0 1 1 90 0"
      />

       <path
        d="M5 50a45 45 0 1 1 90 0"
        stroke-dasharray="142"
        stroke-dashoffset="${percentage}"
        stroke="${svgColor}"
      >
      <animate  attributeName="stroke-dashoffset"
       values=" 142; ${percentage}"
       dur="2s"
       calcMode="linear"/>
</path>
     </g>
 <linearGradient id="good">
          <stop offset="0%" stop-color="rgba(43, 197, 132, 1)" />
          <stop offset='100%' stop-color="rgba(43, 197, 132, 1)" />
 </linearGradient>

  <linearGradient id="danger">
          <stop offset="0%" stop-color="#E06364" />
          <stop offset='100%' stop-color="#E06364" />
 </linearGradient>
</svg>
`;
            // setPercentage(svg, percentage);
            gauge[i].insertAdjacentHTML('beforeend', svg);
        }


        data.map(element => {
            let { percentage, title} = element;
            if(percentage > 100){
                percentage = 100;
            }else if (percentage < 0){
                percentage = 0;
            }
            let elementPercent = 142 - (percentage * 142 / 100);
            let svgColor;
            if(percentage < 50){
                svgColor = 'url(#danger)';
            }else if( percentage >= 50 ){
                svgColor = 'url(#good)';
            }
            if (gauge[i].classList.contains('gauge--score')) {
                creatSvg(142 - (percentage * 142 / 5), title, svgColor);
            }  else {

                creatSvg(142 - (percentage * 142 / 100), title, svgColor);
            }
        });

        let gaugeVal = Number(gauge[i].dataset.value);
        const min = 0;
        const max = gaugeVal;
        const time = 1500;
        const gaugeValueElement = gauge[i].querySelector(".gauge__value");

        (function step(val) {
            setTimeout(function() {
                gaugeValueElement.textContent = val;
                if (val < max) {
                    step(val + 1);
                    if (gaugeValueElement.parentElement.classList.contains("gauge--score")) {

                        step(val = max)
                    }
                }
            }, time / (max - min));
        })(min);


        chartInner[i].innerHTML = gauge[i].getAttribute('data-value');

        if(gauge[i].getAttribute('data-value') < 50) {
            chartInner[i].style.color='#E06364';
        } else {
            chartInner[i].style.color='rgba(43, 197, 132, 1)'
        }

    }
};
