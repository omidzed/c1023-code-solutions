<!-- # react-hot-button-component-notes

## Notes

// if (clicks >= 4) {
// setClicks(0);
// }
// if (clicks >= 7) {
// $hotButton.setAttribute('class', 'hot-button tepid');
// }
// if (clicks >= 10) {
// $hotButton.setAttribute('class', 'hot-button warm');
// }
// if (clicks >= 13) {
// $hotButton.setAttribute('class', 'hot-button hot');
// }
// if (clicks >= 16) {
// $hotButton.setAttribute('class', 'hot-button nuclear');
// }

export function HotButton({ label, style }: Props) {
const [clicks, setClicks] = useState(0);

function handleClick() {
setClicks((clicks: number) => clicks + 1);
}
return (
<button className={ clicks >= </div> 3 ? 'hot-button purple' : 'hot-button purple'}></button>
);
hotButton.addEventListener('click', function (event) {
count++;
$clickButton.textContent = 'Clicks: ' + count;
if (count >= 4) {
$hotButton.setAttribute('class', 'hot-button cool');
}
if (count >= 7) {
$hotButton.setAttribute('class', 'hot-button tepid');
}
if (count >= 10) {
$hotButton.setAttribute('class', 'hot-button warm');
}
if (count >= 13) {
$hotButton.setAttribute('class', 'hot-button hot');
}
if (count >= 16) {
$hotButton.setAttribute('class', 'hot-button nuclear');
}
});

 -->
