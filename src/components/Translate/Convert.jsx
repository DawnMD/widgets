import { useEffect, useState } from "react";
import translate from "../apis/translate";

const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState("");
  useEffect(() => {
    const doTranslate = async () => {
      const { data } = await translate.post(
        "",
        {},
        {
          params: {
            q: text,
            target: language.value,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslate();
  }, [language, text]);
  return (
    <div>
      <h3 className="ui header">{translated}</h3>
    </div>
  );
};

export default Convert;
