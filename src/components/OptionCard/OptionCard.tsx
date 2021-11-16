import { useEffect, useState } from "react";
import { Card, Radio } from "antd";
import { getChannels, getOptions } from "../../api/vote";
import "./OptionCard.scss";
const Option = (props: any) => {
  const { Button } = Radio;
  return <Button value={props.optionId}>{props.mikeFlavour}</Button>;
};
const OptionCard = (props: { channelId: number }) => {
  const [channel, setChannel] = useState<{ mikeKind: string }>({
    mikeKind: "",
  });
  const [options, setOptions] = useState([]);
  console.log(props);
  useEffect(() => {
    getChannels(props.channelId).then((res) => {
      setChannel(JSON.parse(res.data));
    });
    getOptions(props.channelId).then((res) => {
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
