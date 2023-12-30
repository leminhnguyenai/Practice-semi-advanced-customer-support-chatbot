function filter(){
    // Set of Questions
    const Questions = [
    "Are you thinking of a specific type of tech product, like a smart device, gaming gear, audio accessory, or something else?",
    "When it comes to features, is there anything specific you're looking for? Whether it's fitness tracking, virtual reality, or high-quality audio?",
    "What brings you to tech today? Is there a particular purpose or use you have in mind?",
    "If you had something in mind, could you share a bit more about the type of tech product you're interested in? Smart devices, gaming gear, audio, or perhaps outdoor tech?",
    "Got it! Just to refine our focus, are there specific features within that category that you're considering or leaning towards?",
    "Thanks for sharing! As we narrow down the options, any specific use or purpose that's standing out more?",
    "If there's a particular type you're leaning towards, could you provide a bit more detail? Smart devices, gaming gear, audio, or outdoor tech?",
    "Great to know! Zooming in on features, any particular aspects within that category that resonate with you?",
    "As we finalize the details, is there a specific purpose or goal that's becoming clearer to you now? Whether it's gaming, work-related tasks, or versatile daily use?",
    ];
     
    if (workflow.Types === "Not filled"){
        if (workflow.PreviousInformation[0] !== "Not filled") workflow.Types = workflow.PreviousInformation[0];
    }
    else {
        if (workflow.PreviousInformation[0] !== workflow.Types && workflow.PreviousInformation[0] !== "Not filled") workflow.Types = workflow.PreviousInformation[0];
    }
    if (workflow.Features === "Not filled"){
        if (workflow.PreviousInformation[1] !== "Not filled") workflow.Features = workflow.PreviousInformation[1];
    }
    else {
        if (workflow.PreviousInformation[1] !== workflow.Features && workflow.PreviousInformation[1] !== "Not filled") workflow.Features = workflow.PreviousInformation[1];
    }
    if (workflow.Purposes === "Not filled"){
        if (workflow.PreviousInformation[2] !== "Not filled") workflow.Purposes = workflow.PreviousInformation[2];
    }
    else {
        if (workflow.PreviousInformation[2] !== workflow.Purposes && workflow.PreviousInformation[2] !== "Not filled") workflow.Purposes = workflow.PreviousInformation[2];
    }
    if (workflow.Types === "Not filled"){
        workflow.NextMsg = Questions[workflow.Counter*3+0];    
        return;
    }
    if (workflow.Features === "Not filled"){
        workflow.NextMsg = Questions[workflow.Counter*3+1];    
        return;
    }
    if (workflow.Purposes === "Not filled"){
        workflow.NextMsg = Questions[workflow.Counter*3+2];    
        return;
    }
}

filter();