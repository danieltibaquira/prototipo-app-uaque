import instance from '../api/recomendaciones';
import CreateDataContext from './CreateDataContext';

const RecommendationsReducer = (state, action) => {
	switch (action.type) {
		case 'getRecommendation':
			return {...state, recommendations: action.data};
		default:
			return {...state, errorMessage: ''};

	}
};

const getRecommendation = (dispatch) => async() => {
	try{
	  const response = await instance.get(`api/suj-i-009?groupId=${90}`);
		dispatch({type: 'getRecommendation', data: response.data});
	}catch(err){
		console.error(err);
		dispatch({type: 'add_error', data: err.message});
	}
}

export const { Provider, Context } = CreateDataContext(
	RecommendationsReducer,
	{getRecommendation},
	{errorMessage: '', recommendations:[]}
)
