import instance from '../api/perfil_grupal';
import CreateDataContext from './CreateDataContext';

const GroupProfileReducer = (state, action) => {
	switch (action.type) {
        case 'saveFeedback':
			return {...state};
		default:
			return {...state, errorMessage: ''};

	}
};

const saveFeedback = (dispatch) => async({
    itemId,
    userId,
    score,
    groupId
}) => {
	try{
        console.log("Calificacion: ", score, " para el item: ", itemId, " del usuario: ", userId);
		const response = await instance.post('/feedback', {
            itemId,
            userId,
            score,
            groupId
        });
		dispatch({type: 'saveFeedback', data: ''});
	}catch(err){
		console.error(err);
		dispatch({type: 'add_error', data: err.message});
	}
}


export const { Provider, Context } = CreateDataContext(
	GroupProfileReducer,
	{saveFeedback},
	{errorMessage: ''}
)
