import imagembug from       "../../images/types/typebug.png"
import imagemdark from      "../../images/types/typedark.png"
import imagemdragon from    "../../images/types/typedragon.png"
import imagemelectric from   "../../images/types/typeelectric.png"
import imagemfairy from     "../../images/types/typefairy.png"
import imagemfighting from  "../../images/types/typefighting.png"
import imagemfire from      "../../images/types/typefire.png"
import imagemflying from    "../../images/types/typeflying.png"
import imagemghost from     "../../images/types/typeghost.png"
import imagemground from    "../../images/types/typeground.png"
import imagemice from       "../../images/types/typeice.png"
import imagemgrass from      "../../images/types/typeleaf.png"
import imagemnormal from    "../../images/types/typenormal.png"
import imagempoison from    "../../images/types/typepoison.png"
import imagempsychic from   "../../images/types/typepsychic.png"
import imagemrock from      "../../images/types/typerock.png"
import imagemsteel from     "../../images/types/typesteel.png"
import imagemwater from     "../../images/types/typewater.png"

const types = {
  bug: imagembug,
  dark: imagemdark,
  dragon: imagemdragon,
  electric: imagemelectric,
  fairy: imagemfairy,
  fighting: imagemfighting,
  fire: imagemfire,
  flying: imagemflying,
  ghost: imagemghost,
  ground: imagemground,
  ice: imagemice,
  grass: imagemgrass,
  normal: imagemnormal,
  poison: imagempoison,
  psychic: imagempsychic,
  rock: imagemrock,
  steel: imagemsteel,
  water: imagemwater,
};

const GetPokemonType = ({ type }) => {
  const imagem = types[type];
  return (
    <img src={imagem} alt={type} />
  );
};

export { GetPokemonType };