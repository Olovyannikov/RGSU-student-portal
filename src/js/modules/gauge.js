export default () => {
    // helper functions
    function linearInterpolate(from_range, to_range, val) {
        let minX = from_range[0],
            minY = to_range[0],
            rangeX = from_range[1] - from_range[0],
            rangeY = to_range[1] - to_range[0];

        return ((val - minX) * rangeY) / rangeX + minY;
    }

    function clamp(x, min, max) {
        if (x < min) {
            return min;
        }
        if (x > max) {
            return max;
        }
        return x;
    }

    // constructor
    function Gauge(elem, options) {
        let gaugeVal = elem.dataset.value;
        var options = options || {},
            canvas = document.createElement("canvas"),
            value = options.value || 0;

        this.options = options;

        this.ctx = canvas.getContext("2d");
        this.width = options.width || 236;
        this.height = options.height || this.width;
        this.transition = 2;

        // readjust lineWidth based on radius
        if (options.radius) {
            this.lineWidth = this.width / 2 - options.radius;
        } else {
            this.lineWidth = options.lineWidth || 4;
        }
        this.radius = (this.width - this.lineWidth) / 2;

        //set colors for chart
        if (gaugeVal < 50) {
            this.color = options.color || "rgba(224, 99, 100, 1)";
        } else {
            this.color = options.color || "rgba(43, 197, 132, 1)";
        }

        this.background = options.background || "rgba(241, 244, 249, 1)";

        this.range = [0, 100];
        if (elem.classList.contains("gauge--score")) {
            this.range = [0, 5];
        }

        this.interpolate = linearInterpolate.bind(this, this.range, [
            Math.PI,
            2 * Math.PI,
        ]);

        canvas.width = this.width;
        canvas.height = this.height / 2;
        canvas.borderRadius = this.borderRadius;

        this.set(value);

        elem.appendChild(canvas);
    }

    // get/set methods
    Gauge.prototype.get = function () {
        return this.value || 0;
    };

    Gauge.prototype.set = function (value) {
        var ctx = this.ctx,
            range = this.range,
            value = clamp(value, range[0], range[1]),
            drawArc = function () {
                ctx.beginPath();
                ctx.arc.apply(ctx, arguments);
                ctx.stroke();
                // bind all arguments except the end value
            }.bind(this, this.width / 2, this.height / 2, this.radius, Math.PI);

        this.value = value;
        ctx.clearRect(0, 0, this.width, this.height / 2);

        ctx.lineWidth = this.lineWidth;

        // background
        ctx.strokeStyle = this.background;
        drawArc(2 * Math.PI);

        // foreground
        ctx.strokeStyle = this.color;
        drawArc(this.interpolate(value));

        // optional display value
        if (
            this.options.displayvalue &&
            this.options.displayvalue !== "false"
        ) {
            ctx.font =
                "bold " + this.lineWidth + "px Russia, Arial, sans-serif";
            if (gaugeVal < 50) {
                ctx.fillStyle = "rgba(43, 197, 132, 1)";
            } else {
                ctx.fillStyle = "rgba(224, 99, 100, 1)";
            }
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillText(value, this.width / 2, 0);
        }
    };

    let gauges = document.querySelectorAll(".gauge");

    gauges.forEach(function (gauge) {
        let gaugeVal = Number(gauge.dataset.value);
        const gaugeValueElement = gauge.querySelector(".gauge__value");
        gaugeValueElement.textContent = gaugeVal;
        gaugeValueElement.style.color =
            gaugeVal > 50 ? "rgb(43,197,132)" : "rgb(224,99,100)";

        gauge = new Gauge(gauge, {
            value: gauge.dataset.value,
            lineWidth: 4,

        })
    });
};
