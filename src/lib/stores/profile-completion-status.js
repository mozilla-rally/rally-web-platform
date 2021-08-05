import { derived } from "svelte/store";
import { store } from "./app-store";
import { schema as demographicsSchema, inputFormatters } from '../views/profile/survey-schema';
import { formatAnswersForDisplay } from '../views/profile/formatters'
import { questionIsAnswered } from '../views/profile/survey-tools';

export function profileCompletionStatusCallback(state) {
    const formattedDemographicsData = state?.user?.demographicsData ? formatAnswersForDisplay(demographicsSchema, { ...state.user.demographicsData }, inputFormatters) : undefined;
    const profileQuestionsAnswered = formattedDemographicsData ? Object.keys(demographicsSchema)
        .filter(key => questionIsAnswered(formattedDemographicsData[key], demographicsSchema[key].type)).length : 0;
    // get the total number of available profile questions
    const totalProfileQuestions = Object.keys(demographicsSchema).length;
    return { profileQuestionsAnswered, totalProfileQuestions };
  }
  
/**
 * A derived store that gives the number of profileQuestionsAnswered and totalProfileQuestions.
 */
export default derived(store, profileCompletionStatusCallback, { profileQuestionsAnswered: 0, totalProfileQuestions: 7 });