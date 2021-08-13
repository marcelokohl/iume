import React, { useState } from 'react';
import {Link} from '../'
const Terms = () => {

	return (
		<div>
			<h2 className="mb-4">Termos de uso</h2>
			<h3>Geral</h3>
			<p className="text-bold">
				Nós queremos que todo mundo aproveite os nossos serviços da melhor forma possível, mas para isso temos que observar algumas regras.
				<br/><br/>
				A finalidade deste documento (denominado “Termos de uso”) é estabelecer as regras e as condições necessárias para o acesso e utilização do nosso site e dos nossos serviços. Trata-se de um contrato firmado entre você (o "Usuário") e a Black Flag Geração de Programas de Computadores Sob Encomenda LTDA ME (denominada "IUME", "nós" ou "nos"), uma empresa opera sob as leis do Brasil. Você pode entrar em contato conosco através do endereço na Avenida Nossa Senhora de Copacabana, 756 - Ap 302 - Rio de Janeiro, RJ, Brasil, CEP: 22.050-001. Como também através do telefone (21) 99736-5013 ou do e-mail: <a href="mailto:oi@iume.com.br">oi@iume.com.br</a>.
				<br/><br/>
				Este Contrato explica nossas obrigações para com você e suas obrigações para conosco. Caso você decida utilizar nossos serviços, significa que você aceita os presentes Termos de uso e os aplica e utiliza adequadamente durante sua interação com a IUME. Sua não aceitação ou infração constituirá violação aos Termos de uso. Nesse sentido, a IUME se reserva o direito de encerrar a sua conta a qualquer momento.
				<br/><br/>
				A versão válida e eficaz dos Termos de uso será sempre a publicada no site. Esta mencionada versão governa todas as relações passadas e presentes entre os usuários, respeitados direitos adquiridos, atos jurídicos perfeitos e coisa julgada.
				<br/><br/>
				É dever do usuário sempre ler atentamente os Termos de uso. O usuário não poderá  alegar desconhecimento das regras aqui descritas, incluídas as presentes em Termos anteriores, a seu favor, em benefício próprio ou de terceiros.
				<br/><br/>
				É possível que alguns serviços e conteúdos oferecidos pelo site sejam objetos de Termos de uso específicos. Esses termos podem substituir, complementar ou modificar o presente documento. No caso de conflito entre esse Termos de uso e políticas de uso específicas aplicáveis a outras plataformas ou serviços específicos, o especial deverá prevalecer sobre o geral. Destaca-se também que alguns segmentos da prestação dos serviços da IUME é realizada através de serviços de terceiros, o que indica que os termos de uso desses terceiros também deverão ser observados pelo usuário.
				<br/><br/>
			</p>

			<h3>1. Aceitação do termo</h3>
			<p className="text-muted">
				1.1. Você indica que está de acordo com este Termo ao clicar ou pressionar um botão indicando a sua aceitação; ao assinar um documento que se refere a este Termo ou, ainda; ao utilizar nossos serviços. Caso não concorde com este Termo, não usufrua dos serviços e não se cadastre em nosso site.
				<br/><br/>
				1.2. Se você utilizar o serviço em nome de uma organização, você concorda com este Termo em nome dessa organização e declara ter autoridade e legitimidade para fazê-lo. Nesse caso, os pronomes “você” e “seu” se referirão à citada organização. Você também declara e confessa, neste ato, possuir amplos poderes de terceiros eventualmente envolvidos no serviço, sendo, portanto, o único e exclusivo responsável por eventual reclamação de terceiros quanto à utilização de seus nomes, marcas, imagem, etc.
			</p>

			<h3>2. Descrição dos serviços</h3>
			<p className="text-muted">
				2.1. A IUME oferece uma plataforma de design de menus digitais que permite que os usuários criem seu próprio cardápio ao cadastrar os seus produtos de forma organizada e online (denominados a partir de agora como “Serviços”). Além disso, a IUME oferece a possibilidade de você imprimir o menu ou apenas o seu Qr-code respectivo, sendo esse serviço totalmente exclusivo para cada usuário. Através do Qr-code toda e qualquer pessoa conectada à internet, através da câmera do celular, poderá ter acesso ao seu menu em sua versão digital, que ficará armazenado em servidores online.
			</p>

			<h3>3. Prestação dos serviços</h3>
			<p className="text-muted">
				3.1. A IUME irá: <br/>
				(i) fornecer ao usuário suporte básico através do site IUME para os Serviços adquiridos, sem custo adicional, conforme descrito mais detalhadamente na Seção 10 (Suporte ao Usuário) abaixo; e
				<br/><br/>
				(ii) envidar esforços comercialmente razoáveis para disponibilizar os Serviços [24 horas por dia, 7 dias por semana], com tempo de inatividade mínimo, exceto para:
			</p>
			<p className="text-muted pl-2 block mt-2">
				(a) tempo de inatividade planejado e melhoramento agendado, conforme descrito mais detalhadamente na Seção 10 (Suporte ao Usuário) abaixo ou
				<br/><br/>
				(b) qualquer indisponibilidade causada por circunstâncias além do controle razoável da IUME, incluindo, sem limitação, caso fortuito ou força maior, atos de governo, inundações, incêndios, terremotos, distúrbios civis, atos de terror, greves ou outros problemas trabalhistas (exceto aqueles envolvendo funcionários da IUME), falhas ou atrasos do provedor de serviços de Internet ou a indisponibilidade ou modificação por terceiros ou Sites de Terceiros.
				<br/><br/>
				(c) a prestação de serviços da IUME é realizada através de serviços de terceiros, devidamente identificados em nossas políticas, sendo assim, a IUME não se responsabiliza pela possível indisponibilidade relacionada ao serviço desses terceiros.
			</p>

			<h3>4. Conteúdo do usuário</h3>
			<p className="text-muted">
				4.1. Certos recursos do Serviço podem permitir que os usuários enviem conteúdo para o Serviço, incluindo texto, imagens, fontes, designs, dados e outros tipos de trabalhos (“Conteúdo do Usuário”) e publiquem o Conteúdo do Usuário no Serviço.
			</p>
			<h6>4.1. Responsabilidade</h6>
			<p className="text-muted">
				4.1.1. O usuário é o único responsável pela exatidão, adequação e integridade de todo o Conteúdo do Usuário, pela obtenção de todos os possíveis consentimentos de terceiros necessários e por fazer todas as divulgações de terceiros em relação ao Conteúdo do Usuário. A IUME não é responsável por revisar, validar ou confirmar a exatidão, adequação ou integridade do Conteúdo do Usuário.
			</p>
			<h6>4.2. Remoção do conteúdo do usuário a pedido do usuário</h6>
			<p className="text-muted">
				4.2.1. O usuário pode controlar o Conteúdo do Usuário armazenado pelos Serviços, podendo a qualquer momento incluir, excluir ou modificar o Conteúdo do Usuário armazenado nos Serviços.
			</p>
			<h6>4.3. Restrições</h6>
			<p className="text-muted">
				4.3.1. O Usuário concorda em não enviar ou fazer o carregamento, ou ainda em não pedir à IUME para obter de terceiros, qualquer Conteúdo do Usuário que:
				<br/><br/>
				(i) o Usuário não tenha o direito legal de copiar, transmitir, distribuir e exibir (incluindo qualquer Conteúdo do Usuário que viole quaisquer obrigações de confidencialidade ou fiduciárias que o Usuário possa ter em relação ao Conteúdo do Usuário);
				<br/><br/>
				(ii) para o qual o Usuário não tem o consentimento ou permissão do proprietário de quaisquer informações de identificação pessoal contidas no Conteúdo do Usuário;
				<br/><br/>
				(iii) que infrinja, se aproprie indevidamente ou viole qualquer propriedade intelectual ou outros direitos de propriedade ou viole quaisquer direitos de privacidade de terceiros (incluindo, sem limitação, qualquer direito autoral, de marca comercial, patente, segredo comercial ou outro direito de propriedade intelectual ou moral, ou direito de publicidade);
				<br/><br/>
				(iv) seja falso ou enganoso;
				<br/><br/>
				(v) seja difamatório, obsceno ou ofensivo, ou contenha ameaça de danos físicos ou violência; ou
				<br/><br/>
				(vi) viole ou incentive qualquer conduta que possa violar qualquer lei ou regulamento aplicável ou que dê origem a responsabilidade civil ou criminal.
				<br/><br/>
				4.3.2. A violação desses termos permite que a IUME encerre ou indisponibilize a sua conta imediatamente, sem a necessidade de qualquer aviso prévio.
			</p>

			<h6>4.4. Indenização</h6>
			<p className="text-muted">
				4.4.1. O usuário concorda em isentar a IUME (seus funcionários, diretores, administradores e afiliadas) de toda e qualquer responsabilidade (incluindo danos, recuperações, deficiências, juros, multas e honorários advocatícios razoáveis), pelo que o Usuário entende ser ele o único responsável por indenizar terceiros por danos relativas a:
				<br/><br/>
				(i) Conteúdo do Usuário,
				<br/><br/>
				(ii) A violação, pelo usuário, de quaisquer de suas obrigações, representações e/ou garantias impostas pelo presente Contrato,
				<br/><br/>
				(iii) Uso pelo usuário dos Serviços, inclusive em combinação com qualquer software, aplicativo ou serviço de terceiros.
			</p>

			<h3>5. Contas do usuário</h3>
			<p className="text-muted">
				5.1. Para acessar a maioria dos recursos do Serviço, o usuário deve se registrar para obter uma conta ("Conta de Usuário"). Quando o usuário se registra em uma conta, o usuário pode ser solicitado a nos fornecer algumas informações, como o endereço de email. O usuário concorda que as informações fornecidas pelo usuário são precisas e que o usuário manterá as mesmas atualizadas sempre.
				<br/><br/>
				5.2. Os usuários só podem acessar e usar o Serviço por meio de sua conta de usuário específica. O usuário não compartilhará sua Conta de Usuário com nenhuma outra pessoa. O usuário é responsável por todas as atividades que ocorrem em sua Conta de Usuário. O Usuário é responsável por todo o uso dos Serviços pelos Usuários e por manter a confidencialidade de sua Conta de Usuário e notificará imediatamente a IUME de qualquer uso não autorizado real ou suspeito dos Serviços. A IUME reserva-se o direito de suspender qualquer Conta de Usuário se determinar que pode ter sido usada para fins não autorizados.
			</p>

			<h6>5.1. Responsabilidades do usuário</h6>
			<p className="text-muted">
				5.1.1. O Usuário concorda ser ele o responsável pelo cumprimento deste Contrato e pelo uso dos Serviços, bem como por garantir que se mantenha a confidencialidade de suas Contas de Usuário. O Usuário concorda ser ele o responsável por todas as condutas relativas a utilização e acesso aos serviços. Para maior certeza, mas sem limitar a generalidade do exposto, o Usuário concorda que não irá:
				<br/><br/>
				(i) usar ou permitir o uso dos Serviços, exceto conforme permitido por este Contrato;
				<br/><br/>
				(ii) usar ou permitir que usem os Serviços para coletar, transmitir ou processar:
				<br/><br/>
				(a) material infringente, obsceno, ameaçador, ofensivo, calunioso, ou de outra forma ilegal ou ilícito, incluindo material que seja prejudicial a crianças ou que viole direitos de privacidade de terceiros;
				<br/><br/>
				(b) quaisquer dados não públicos ou identificáveis pessoalmente, principalmente quando tais dados sejam relativos à identidade financeira ou econômica de um indivíduo, orientação sexual, crenças religiosas, identidade médica ou física;
				<br/><br/>
				(iv) usar ou permitir que os Usuários usem os Serviços para enviar, armazenar, publicar, postar, carregar ou transmitir quaisquer vírus, cavalos de Troia, "worms", bombas-relógio, arquivos corrompidos ou outras rotinas de programação de computadores que visam prejudicar, interferir de forma prejudicial, interceptar ou expropriar sub-repticiamente quaisquer sistemas, dados, informações pessoais ou propriedade de outro;
				<br/><br/>
				(v) usar os Serviços de uma maneira que interfira ou perturbe a integridade ou o desempenho dos Serviços após um aviso da IUME de tal uso;
				<br/><br/>
				(vi) tentar obter acesso não autorizado aos Serviços ou a seus sistemas ou redes relacionadas;
				<br/><br/>
				(vii) usar ou conscientemente permitir o uso de quaisquer ferramentas de teste de segurança para sondar, digitalizar ou tentar penetrar ou determinar a segurança dos Serviços;
				<br/><br/>
				(viii) usar qualquer mineração de dados, robôs ou métodos similares de coleta ou extração de dados;
				<br/><br/>
				(ix) acessar os Serviços com o propósito de construir um produto ou serviço similar ou concorrencial ou com a finalidade de obter acesso não autorizado aos Serviços; ou
				<br/><br/>
				(x) copiar, traduzir, criar um trabalho derivado de engenharia reversa, montar reversamente, desmontar ou descompilar os Serviços ou qualquer parte dele ou tentar descobrir qualquer código-fonte ou modificar os Serviços.
			</p>

			<h3>6. Exclusão de garantias e de responsabilidade</h3>
			<p className="text-muted">
				6.1. Entre a IUME e o Usuário, o Usuário é o único responsável pela precisão, qualidade, integridade, legalidade, confiabilidade e adequação de todo o Conteúdo do Usuário. O usuário entende que o processamento técnico e a transmissão do Conteúdo do Usuário são fundamentalmente necessários para o uso dos Serviços. Por isso, o Usuário concorda expressamente com o armazenamento do Conteúdo do Usuário pela IUME, que envolverá a transmissão pela Internet e a utilização de serviços de terceiros para isso. No entanto, apesar de todos os esforços para a manutenção ativa dos serviços, o Usuário reconhece e compreende a IUME não é responsável por qualquer Conteúdo do Usuário que seja atrasado, perdido, alterado, interceptado ou armazenado durante a transmissão de quaisquer dados em redes públicas não pertencentes e/ou não operadas pela IUME, incluindo, mas não limitado à Internet, sites e serviços de terceiros e sua rede local. O Usuário concorda que a IUME não é de forma alguma responsável por qualquer interferência no uso ou acesso do Usuário aos Serviços ou violações de segurança decorrentes ou imputáveis à Internet, e o Usuário renuncia a todas e quaisquer reclamações contra a IUME em relação a elas.
			</p>

			<h3>7. Suspensão do acesso</h3>
			<p className="text-muted">
				7.1. Além de qualquer outra suspensão ou direitos de rescisão da IUME nos termos deste Contrato, certas circunstâncias extraordinárias podem exigir que a IUME suspenda ou termine (quando apropriado) o acesso do usuário e/ou o uso de Serviços e/ou qualquer componente dos mesmos, sem aviso prévio para:
				<br/><br/>
				(i) impedir danos ou degradação da integridade da IUME;
				<br/><br/>
				(ii) cumprir o presente Termos de uso, qualquer lei, regulamentação, ordem judicial ou outro pedido ou ordem governamental; ou
				<br/><br/>
				(iii) de outra forma proteger a IUME de potenciais responsabilidades legais ou danos à sua reputação ou negócio.
				<br/><br/>
				7.2. A IUME fará esforços comercialmente razoáveis para notificar o Usuário sobre o(s) motivo(s) para tal suspensão ou ação de rescisão assim que razoavelmente praticável. No caso de uma suspensão, a IUME irá restaurar prontamente o acesso do Usuário aos Serviços logo que o evento que deu origem à suspensão tiver sido resolvido.
				<br/><br/>
				7.3. Nada contido neste Contrato será interpretado no sentido de limitar as ações ou soluções da IUME ou atuar como uma renúncia aos direitos da IUME de qualquer forma com relação a qualquer uma das atividades anteriores. A IUME não será responsável por qualquer perda ou danos incorridos pelo Usuário como resultado de qualquer rescisão ou suspensão do acesso ou uso dos Serviços ao abrigo desta disposição.
			</p>

			<h3>8. Propriedade intelectual e avisos de reprodução limitada</h3>
			<p className="text-muted">
				8.1. Nem este Termo nem o uso do serviço transfere ao Usuário a propriedade do serviço. Este Termo não lhe outorga nenhum direito de usar as marcas registradas ou outros elementos distintivos da IUME. O uso indevido e desautorizado das marcas registradas ou outros elementos distintivos da IUME pode acarretar na suspensão ou encerramento da sua utilização do site ou do serviço e gera o dever de indenizar por perdas e danos nos termos da lei. A IUME não reivindica propriedade sobre os Conteúdos do Usuário que o Usuário cria.
			</p>
			<h6>8.1. Concessões de licença pela IUME</h6>
			<p className="text-muted">
				8.1.1. Sujeito aos termos e condições deste Contrato, a IUME concede ao Usuário
				<br/><br/>
				(i) uma licença não exclusiva e intransferível durante o prazo de prestação do serviço para permitir que o Usuário acesse os Serviços pela Internet e através da interface padrão então disponível para os Serviços;
				<br/><br/>
				(ii) uma licença mundial não exclusiva, intransferível, isenta de royalties para usar, reproduzir e distribuir o Conteúdo do Usuário gerado pelos Serviços.
			</p>
			<h6>8.2. Concessão de licença pelo usuário</h6>
			<p className="text-muted">
				8.2.1. Sujeito aos termos e condições deste contrato, o Usuário concede à IUME uma licença mundial totalmente gratuita e isenta de royalties para acessar, coletar, armazenar e usar o Conteúdo do Usuário exclusivamente para fornecer os Serviços ao Usuário.
			</p>


			<h3>9. Política de privacidade</h3>
			<p className="text-muted">
				9.1. Durante o uso dos nossos serviços, você poderá fornecer à IUME dados pessoais seus e/ou de terceiros. Ao fazer o uso do nosso serviço, você concorda em estar atento a nossa <Link to="/privacy-policy" >Política de Privacidade</Link> e com o tratamento que daremos às suas informações.
			</p>

			<h3>10. Suporte ao usuário</h3>
			<p className="text-muted">
				10.1. A IUME irá fornecer o seguinte suporte padrão ao usuário:
			</p>
			<h6>10.1. Atualizações do serviço e tempo de inatividade programado</h6>
			<p className="text-muted">10.1.1. A IUME atualizará os Serviços a seu exclusivo critério. A IUME pode, ocasionalmente, programar o tempo de inatividade para manutenção e melhorias. </p>
			<h6>10.2. Armazenamento de dados e backup</h6>
			<p className="text-muted">
				10.2.1. Os Serviços incluem armazenamento de dados online e backups regulares de dados do Conteúdo do Usuário armazenado nos Serviços. A IUME realiza o backup do Conteúdo do usuário uma vez por dia. Em caso de falha dos Serviços, a IUME se esforçará para restaurar o Conteúdo do Usuário do backup de dados disponível mais recente dentro de 7 dias úteis. No entanto, é responsabilidade do usuário fazer backup no seu próprio sistema local de todo o Conteúdo do Usuário, incluindo todos os conteúdo, arquivos e dados que o Usuário envia para a IUME.
				<br/><br/>
				10.2.2. IUME encoraja e fortemente indica aos Usuários manterem uma versão impressa do Conteúdo do usuário relacionado ao menu digital. A IUME se compromete em envidar esforços comercialmente razoáveis para disponibilizar os Serviços [24 horas por dia, 7 dias por semana], com tempo de inatividade mínimo. No entanto, caso algum imprevisto que esteja fora da responsabilidade da IUME ocorra, a versão impressa do conteúdo do usuário minimizará qualquer possível dano à  continuidade dos serviços prestados pelo usuário.
			</p>

			<h3>11. Alteração dos Termos de Uso</h3>
			<p className="text-muted">
				11.1. A IUME pode alterar este Termo a qualquer momento por vários motivos, como para refletir alterações da legislação aplicável ou atualizações do serviço, ou para incorporar novo serviço ou funcionalidades.
				<br/><br/>
				11.2. Qualquer alteração será inserida em nossas plataformas. A IUME também pode notificar seus usuários sobre as citadas alterações, por e-mail. Para que determinadas alterações tornem-se vigentes, a legislação aplicável pode exigir que a IUME obtenha sua autorização para essas alterações ou que lhe envie uma notificação dessas alterações com antecedência.
				<br/><br/>
				11.3. Se você não concordar com alguma alteração feita nos termos de um serviço, deverá deixar de usá-lo. Ao continuar usando o serviço, você expressa a sua concordância em vincular-se aos termos atualizados.
			</p>

			<h3>Disposições finais</h3>
			<p className="text-muted">
				Existindo dúvidas sobre este instrumento ou sobre o que ele engloba, o Usuário pode entrar em contato através do e-mail <a href="mailto:oi@iume.com.br">oi@iume.com.br</a>.
			</p>
			<p>
				O usuário declara ter lido e compreendido os termos e disposições deste acordo de utilização e que está ciente de seu inteiro teor, aceitando todas as suas condições.
			</p>

			<div className="text-center pt-5 pb-6">
				<b>Última atualização</b>
				<div className="text-muted mt-1">setembro/2020</div>
			</div>
		</div>
	)
};

export { Terms }
