import axios from "axios";
import styles from "../styles/Courses.module.scss";
import Class from "../components/Class";
import Layout from "../components/Layout";
function courses({ data }) {
	if (!data.success) {
		return (
			<Layout>
				<div>Could not fetch classes</div>
			</Layout>
		);
	} else {
		const classes = data.data;
		return (
			<Layout>
				<div className={styles.classesContainer}>
					{classes.map((cls) => {
						cls = { ...cls, btn: "add" };
						return <Class key={cls._id} cls={cls} />;
					})}
				</div>
			</Layout>
		);
	}
}
export async function getStaticProps() {
	const res = await axios.get("http://localhost:3000/api/classes");
	const data = res.data;
	return {
		props: { data },
	};
}
export default courses;
