import { DefaultTooltipContent } from 'recharts/lib/component/DefaultTooltipContent';

const CustomTooltip = (props) => {

    console.log(props.payload)


    if (!props.active) {
    return null
    }

    const newPayload = [
    {
        name: '',
        // all your data which created the tooltip is located in the .payload property
        value: props.payload[0].value
    }
    ];

    return <DefaultTooltipContent payload={newPayload} />
}

export default CustomTooltip;