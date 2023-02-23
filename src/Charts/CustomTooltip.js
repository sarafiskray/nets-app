import { DefaultTooltipContent } from 'recharts/lib/component/DefaultTooltipContent';

//this file is not currently being used
const CustomTooltip = (props) => {

    console.log(props.payload)


    if (!props.active) {
    return null
    }

    let newPayload
    if (props.payload.length == 1) {
        newPayload = [
        {
            // all your data which created the tooltip is located in the .payload property
            value: props.payload[0].value
        }
    ]

    if (props.payload.length == 2) {
        newPayload = [
            {
                // all your data which created the tooltip is located in the .payload property
                value: props.payload[0].value
            },
            {
                value: props.payload[1].value
            }
        ]
    }
    }   
  

    return <DefaultTooltipContent payload={newPayload} />
}

export default CustomTooltip;