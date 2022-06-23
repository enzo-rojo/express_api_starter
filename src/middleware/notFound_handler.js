const NotFoundError = require('../helpers/errors/404_notFound');

module.exports = () => {
	throw new NotFoundError({
		message: 'Ressource introuvable',
		description:
			"Désolé, nous n'avons pas trouvé la ressource demandée. Vérifiez l'URI et réessayez.",
	});
};
