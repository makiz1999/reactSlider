import React from "react";
import Entry from "./Entry";

function CreateEntry(details){
    return (
        <Entry
        key = {details.id}
        title={details.title}
        description={details.text}
        />
    )
}

export default CreateEntry;