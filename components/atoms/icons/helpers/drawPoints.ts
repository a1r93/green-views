interface IPoint {
    x: number;
    y: number;
}

const drawPoint = (group: Element, point: IPoint) => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', `${point.x}`);
    circle.setAttribute('cy', `${point.y}`);
    circle.setAttribute('r', `0.5`);
    circle.setAttribute('fill', '#A6CEC0');
    group!.appendChild(circle);
};

const drawPointsInBetween = (group: Element, currentPoint: IPoint, nextPoint: IPoint) => {
    const { x, y } = currentPoint;
    const { x: x2, y: y2 } = nextPoint;
    const dx = x2 - x;
    const dy = y2 - y;
    const incrementx = dx / 5;
    const incrementy = dy / 5;

    for (let i = 0; i < 5; i += 1) {
        const interpolatedPoint = { x: x + incrementx * i, y: y + incrementy * i };
        drawPoint(group, interpolatedPoint);
    }
};

export const drawPoints = (id: string) => {
    const svg = document.querySelector(`#${id}-svg`);
    const group = svg?.querySelector(`#${id}-group`);
    const paths = svg?.querySelectorAll('path');

    if (!group || !paths?.length) return 0;

    group.innerHTML = '';
    let previousPoint: IPoint;
    let drawnPoints = 0;
    paths?.forEach(path => {
        path.setAttribute('stroke-opacity', '0');
        const length = path.getTotalLength();
        let i: number;
        for (i = 0; i <= length; i += 1) {
            const point = path.getPointAtLength(i);
            previousPoint && drawPointsInBetween(group, point, previousPoint);
            drawPoint(group, point);
            previousPoint = point;
        }
        drawnPoints += i * 6;
    });

    return drawnPoints;
};
