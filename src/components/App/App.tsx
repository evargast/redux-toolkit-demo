import { Grid, lightTheme, Provider } from "@adobe/react-spectrum";
import { SampleForm } from "components/SampleForm";
import { StateJSON } from "components/StateJSON";
import React, { FC } from "react";

const App: FC = () => {
    return (
        <Provider theme={lightTheme} colorScheme={"light"} height="100%">
            <Grid columns={["1fr", "1fr"]} height="100%">
                <SampleForm />
                <StateJSON />
            </Grid>
        </Provider>
    );
};

export { App };
