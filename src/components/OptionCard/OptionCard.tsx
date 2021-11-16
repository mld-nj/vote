import { useEffect, useState } from "react";
import { Card, Radio } from "antd";
import { getChannels, getOptions } from "../../api/vote";
import "./OptionCard.scss";
const Option = (props: any) => {
  //   const { Button } = Radio;
  return <Radio value={props.optionId}>{props.mikeFlavour}</Radio>;
};
const OptionCard = (props: { channlId: number }) => {
  const [channels, setChannels] = useState([]);
  const [options, setOptions] = useState([]);
  const channel: any = channels[0];
  useEffect(() => {
    getChannels(props.channlId).then((res) => {
      setChannels(JSON.parse(res.data));
    });
    getOptions(props.channlId).then((res) => {
      setOptions(JSON.parse(res.data));
    });
  }, []);
  return (
    <div className="optionCardContainer">
      <Card title={channel.mikeKind}>
        <Radio.Group>
          {options.map((value: any) => {
            return (
              <Option
                mikeFlavour={value.mikeFlavour}
                optionId={value.optionId}
              ></Option>
            );
          })}
        </Radio.Group>
      </Card>
    </div>
  );
};
export default OptionCard;
