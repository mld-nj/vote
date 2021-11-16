import { useEffect, useState } from "react";
import { Card, Radio } from "antd";
import { getChannels, getOptions } from "../../api/vote";
import { useRecoilState } from "recoil";
import { userOption } from "../../store/optionStore";
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
  const [userDes, setUserDes] = useRecoilState(userOption);
  useEffect(() => {
    getChannels(props.channelId).then((res) => {
      setChannel(JSON.parse(res.data));
    });
    getOptions(props.channelId).then((res) => {
      setOptions(JSON.parse(res.data));
    });
  }, []);
  const { channelId } = props;
  const onChange = (e: any) => {
    console.log(e.target.value);
    if (channelId == 1) {
      setUserDes({ ...userDes, optionId1: e.target.value });
    } else if (channelId == 2) {
      setUserDes({ ...userDes, optionId2: e.target.value });
    } else {
      setUserDes({ ...userDes, optionId3: e.target.value });
    }
  };
  return (
    <div className="optionCardContainer">
      <Card title={channel.mikeKind}>
        <Radio.Group onChange={onChange}>
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
