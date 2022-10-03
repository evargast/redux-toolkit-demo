import { View } from "@adobe/react-spectrum";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const StateJSON: FC = () => {
    const formValues = useSelector((state: RootState) => state.formSlice);

    return (
        <View
            borderRadius="medium"
            backgroundColor="gray-300"
            padding="size-250"
        >
            <h3 id="label-3">Store state</h3>
            <pre>{JSON.stringify(formValues, null, 2)}</pre>
        </View>
    );
};

export { StateJSON };
