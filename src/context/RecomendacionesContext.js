
import instance from '../api/recomendaciones';
import CreateDataContext from './CreateDataContext';

const DANIEL = '6466dbb15c41fdacb59eb1179817958de2c57191'
const JOHAN = 'f238ced57557c11baff818a0a1ede2d60f70b3a7'
const SEBASTIAN = '33c7a2220802831409c62333e13f068363a5d768'

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
	  const response = await instance.get(`api/suj-i-009?groupId=${DANIEL}`);
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
